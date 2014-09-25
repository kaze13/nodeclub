/**
 * config
 */

var path = require('path');
var pkg = require('./package.json');

var config = {
  debug: true,
  name: 'Company Forum',
  description: 'Come on girls~',
  version: pkg.version,

  // site settings
  site_headers: [
    '<meta name="author" content="EDP@TAOBAO" />',
  ],
  host: 'localhost',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: 'UA-41753901-5',
  site_logo: 'Company Forum', // default is `name`
  site_icon: '', // 默认没有 favicon, 这里填写网址
  site_navs: [
    // [ path, title, [target=''] ]
    [ '/about', '关于' ],
  ],
  site_static_host: '', // 静态文件存储域名
  mini_assets: false, // 静态文件的合并压缩，详见视图中的Loader
  site_enable_search_preview: false, // 开启google search preview
  site_google_search_domain: 'www.xiaotanzhu.com',  // google search preview中要搜索的域名

  upload_dir: path.join(__dirname, 'public', 'user_data', 'images'),

  db: 'mongodb://127.0.0.1/node_club_dev',
  db_name: 'node_club_dev',
  session_secret: 'node_club',
  auth_cookie_name: 'node_club',
  port: 7777,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // 限制发帖时间间隔，单位：毫秒
  post_interval: 2000,

  // RSS
  rss: {
    title: 'Company Form',
    link: 'http://www.xiaotanzhu.com',
    language: 'zh-cn',
    description: 'Company Form',

    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // site links
  site_links: [
    {
      'text': '360度在线环评系统',
      'url': 'http://www.xiaotanzhu.com:3000/'

    },
    {
      text: '清华大学心理系实验平台',
      url: 'http://www.xiaotanzhu.com:4000/'
    },

  ],

  // sidebar ads
  side_ads: [

  ],

  // mail SMTP
  mail_opts: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'club@126.com',
      pass: 'club'
    }
  },

  //weibo app key
  weibo_key: 10000000,

  // admin 可删除话题，编辑标签，设某人为达人
  admins: { admin: true },

  // [ { name: 'plugin_name', options: { ... }, ... ]
  plugins: [
    // { name: 'onehost', options: { host: 'localhost.cnodejs.org' } },
    // { name: 'wordpress_redirect', options: {} }
  ],
  GITHUB_OAUTH: {
    clientID: 'your GITHUB_CLIENT_ID',
    clientSecret: 'your GITHUB_CLIENT_SECRET',
    callbackURL: 'http://cnodejs.org/auth/github/callback',
  },
  allow_sign_up: true,
  newrelic_key: 'yourkey'
};

module.exports = config;
module.exports.config = config;
