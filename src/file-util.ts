import fs from 'fs-extra'

export default class FileUtil {
  static async pathExists(path: string): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise(async (resolve, reject) => {
      try {
        await fs.access(path)
        resolve(true)
      } catch (error: unknown) {
        resolve(false)
      }
    })
  }
}
