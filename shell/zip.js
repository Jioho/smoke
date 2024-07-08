import fs from 'fs'
import path from 'path'
import JSZip from 'jszip'
import dayjs from 'dayjs'
import { fileURLToPath } from 'url'

// 获取当前文件的路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const zipFullName = `dist_${dayjs().format('YYMMDD_HHmm')}.zip`

// https://github.com/pangyunchuan/vite-plugin-dist-zip/blob/main/lib/index.ts

const directoryToCompress = path.join(__dirname, '../dist', 'client')
const outputZipFile = path.join(__dirname, '../dist', zipFullName)
console.log('开始压缩...')
const zip = new JSZip()

function readDir(jsZip, dirPath) {
  // 读取dist下的根文件目录
  const files = fs.readdirSync(dirPath)
  files.forEach((fileName) => {
    const fillPath = path.resolve(dirPath, fileName)
    const file = fs.statSync(fillPath)
    // 如果是文件夹的话需要递归遍历下面的子文件
    if (file.isDirectory()) {
      const folderZip = jsZip.folder(fileName)
      if (folderZip) {
        readDir(folderZip, fillPath)
      }
    } else {
      // 读取每个文件为buffer存到zip中
      jsZip.file(fileName, fs.readFileSync(fillPath))
    }
  })
}

// 添加压缩目录名称
// let folder = null
// if (includeDistDir) {
//   folder = zip.folder(path.basename(distDir))
// }

readDir(zip, directoryToCompress)

zip
  .generateAsync({
    type: 'nodebuffer', // 压缩类型
    compression: 'DEFLATE', // 压缩算法
    compressionOptions: {
      // 压缩级别
      level: 9
    }
  })
  .then((content) => {
    // 把zip包写到硬盘中，这个content现在是一段buffer
    fs.writeFileSync(outputZipFile, content)
    console.log('压缩完成: ', outputZipFile)
  })
  .catch((error) => {
    console.error('压缩失败: ', error)
  })
