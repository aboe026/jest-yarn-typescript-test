import fs from 'fs-extra'

import FileUtil from '../src/file-util'

describe('File Util Unit Tests', () => {
  describe('pathExists', () => {
    it('returns false if fs access throws error', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      jest.spyOn(fs, 'access').mockImplementation((path, callback) => {
        callback(new Error('Permission Denied.'))
      })
      await expect(FileUtil.pathExists('toast')).resolves.toEqual(false)
    })
    it('returns true if fs access does not throw error', async () => {
      jest.spyOn(fs, 'access').mockImplementation()
      await expect(FileUtil.pathExists('toast')).resolves.toEqual(true)
    })
  })
})
