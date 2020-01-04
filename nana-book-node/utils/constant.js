const { env } = require('./env')
const UPLOAD_PATH = env === 'dev' ?
    '/Users/teddy1209/upload/admin-upload-ebook' :
    '/root/nginx/upload/admin-upload-ebook'

const UPLOAD_URL = env === 'dev' ?
    // 'http://nanabook.xyz:8089/admin-upload-ebook' :
    'http://localhost:8089/admin-upload-ebook' :
    'http://39.99.252.172/admin-upload-ebook'
    //  'https://nanabook.xyz/admin-upload-ebook'

const OLD_UPLOAD_URL = env === 'dev' ?
    // 'http://nanabook.xyz:8089/book/res/img' :
    'http://localhost:8089/book/res/img' :
    'http://39.99.252.172/book/res/img'
    // 'https://nanabook.xyz/book/res/img'

module.exports = {
    CODE_ERROR: -1,
    CODE_SUCCESS: 0,
    CODE_TOKEN_EXPIRED: -2,
    PWD_SALT: 'nanabook_user_password',
    PRIVATE_KEY: 'nanabook_xyz_private_key',
    JWT_EXPIRED: 60 * 60,
    UPLOAD_PATH, // 上传文件路径
    UPLOAD_URL, // 上传文件URL前缀
    MIME_TYPE_EPUB: 'application/epub+zip',
    UPDATE_TYPE_FROM_WEB: 1,
    OLD_UPLOAD_URL
}