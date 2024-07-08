import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// dist 目录路径
const distDir = path.join(__dirname, '../dist')

// 判断 dist 目录是否存在
if (fs.existsSync(distDir)) {
  // 读取 dist 目录下的所有文件和子目录
  const files = fs.readdirSync(distDir)

  // 遍历并删除所有文件和子目录
  for (const file of files) {
    const filePath = path.join(distDir, file)
    if (fs.lstatSync(filePath).isDirectory()) {
      // 递归删除子目录
      fs.rmSync(filePath, { recursive: true, force: true })
    } else {
      // 删除文件
      fs.unlinkSync(filePath)
    }
  }
}
