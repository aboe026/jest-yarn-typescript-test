import fs from 'fs-extra'

import FileUtil from '../src/file-util'

describe('File Util Unit Tests', () => {
  describe('pathExists', () => {
    it('returns false if fs access throws error', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      jest.spyOn(fs, 'access').mockImplementation((path, callback) => {
        callback(new Error('Permission denied'))
      })
      await expect(FileUtil.pathExists('toast')).resolves.toEqual(false)
    })
  })
})
