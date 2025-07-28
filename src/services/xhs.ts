import { request } from '@/utils/request';

export function getXiaohongshuAccounts(params: { page: number; size: number }) {
  return request('/local/xiaohongshu', { params });
}

export function getXiaohongshuDetail(params: { id: string }) {
  return request(`/local/xiaohongshu/${params.id}`);
}

export function setCookiesLocalStorage(data: { name: string, cookies: any[], localStorage: any[] }) {
  request('/local/xiaohongshu/cookies/localStorage/set', {
    method: 'post',
    data
  })
}

export function activate(data: { name: string }) {
  return request('/local/xiaohongshu/user/activate', {
    method: 'post',
    data
  })
}

export function sendCode(data: { name: string, phone: string }) {
  return request('/local/xiaohongshu/home/send/code', {
    method: 'post',
    data
  })
}

export function checkCode(data: { name: string, phone: string, code: string }) {
  return request('/local/xiaohongshu/home/check/code', {
    method: 'post',
    data
  })
}

export function loginPhone(data: { name: string, mobile_token: string, phone: string }) {
  return request('/local/xiaohongshu/home/login/phone', {
    method: 'post',
    data
  })
}

export function getQRCode(data: { name: string }) {
  return request('/local/xiaohongshu/home/qrcode/get', {
    method: 'post',
    data
  })
}

export function checkQRCode(data: { name: string, qr_id: string, code: string }) {
  return request('/local/xiaohongshu/home/qrcode/check', {
    method: 'post',
    data
  })
}

export function checkCaptcha(data: { name: string, mouseEnd: string, time: string, track: string, rid: string, verifyUuid: string }) {
  return request('/local/xiaohongshu/home/captcha/check', {
    method: 'post',
    data
  })
}

export function getXhsCookies(data: { name: string }) {
  return request('/local/xiaohongshu/note/cookie/get', {
    method: 'post',
    data
  })
}

export function getXhsAccountInfo(data: { name: string }) {
  return request('/local/xiaohongshu/user/info/get', {
    method: 'post',
    data
  })
}

export function clearXhsCookies(data: { name: string }) {
  return request('/local/xiaohongshu/note/cookie/clear', {
    method: 'post',
    data
  })
}

export function rewriteNoteTitle(data: { content: string, style: 'mimeng' | 'xhs' }) {
  return request('/local/xiaohongshu/note/title/rewrite', {
    method: 'post',
    data
  })
}

export function publishImageNote(data: {
  name: string,
  title: string,
  content: string,
  files: string[],
  tags: any[],
  ats: any[],
  trailer_plan?: any,
  goods?: any[],
  is_private?: boolean,
}) {
  return request('/local/xiaohongshu/creator/note/create/image', {
    method: 'post',
    data
  })
}

export function scheduleImageNote(data: {
  name: string,
  title: string,
  content: string,
  files: string[],
  tags: any[],
  ats: any[],
  trailer_plan?: any,
  goods?: any[],
  is_private?: boolean,
  area?: string,
  scheduled_time: string,
}) {
  return request('/local/xiaohongshu/creator/note/schedule', {
    method: 'post',
    data
  })
}

export function rewriteNoteContent(data: { content: string, imgs?: string[] }) {
  return request('/local/xiaohongshu/note/content/rewrite', {
    method: 'post',
    data
  })
}

export function adjustNoteContent(data: { content: string, suggestion: string, imgs?: string[] }) {
  return request('/local/xiaohongshu/note/content/adjust', {
    method: 'post',
    data
  })
}

export function adjustTextContent(data: { content: string, suggestion: string, paragraph: string }) {
  return request('/local/xiaohongshu/note/content/adjust/text', {
    method: 'post',
    data
  })
}

export function getNoteByUrl(data: { name: string, url: string }) {
  return request('/local/xiaohongshu/creator/note/get/url', {
    method: 'post',
    data
  })
}

export function startAutoReply(data: { name: string, reply: string }) {
  return request('/local/xiaohongshu/creator/mention/autoreply/start', {
    method: 'post',
    data
  })
}

export function stopAutoReply(data: { name: string }) {
  return request('/local/xiaohongshu/creator/mention/autoreply/stop', {
    method: 'post',
    data
  })
}

export function muteUser(data: { name: string, user_id: string, type: 'black' | 'grey', nickname?: string }) {
  return request('/local/xiaohongshu/creator/mention/mute/set', {
    method: 'post',
    data
  })
}

export function unmuteUser(data: { name: string, user_id: string, type: 'black' | 'grey', nickname?: string }) {
  return request('/local/xiaohongshu/creator/mention/unmute/set', {
    method: 'post',
    data
  })
}

export function mutedUserGet(data: { name: string, type: 'black' | 'grey' }) {
  return request('/local/xiaohongshu/creator/mention/mute/get', {
    method: 'post',
    data
  })
}

export function addReply(data: { name: string, reply: string }) {
  return request('/local/xiaohongshu/creator/mention/reply/add', {
    method: 'post',
    data
  })
}

export function deleteReply(data: { name: string, reply: string }) {
  return request('/local/xiaohongshu/creator/mention/reply/delete', {
    method: 'post',
    data
  })
}

export function listReplies(data: { name: string }) {
  return request('/local/xiaohongshu/creator/mention/reply/list', {
    method: 'post',
    data
  })
}

export function getTrailerPlan(data: { name: string }) {
  return request('/local/xiaohongshu/livemall/trailer_plan', {
    method: 'post',
    data
  })
}

export function getGoodsInfo(data: { name: string }) {
  return request('/local/xiaohongshu/livemall/goods_info', {
    method: 'post',
    data
  })
}

export function getAtUser(data: { name: string, page: number, keyword: string }) {
  return request('/local/xiaohongshu/creator/note/suggest/ats', {
    method: 'post',
    data
  })
}

export function getSuggestTags(data: { name: string, tag: string }) {
  return request('/local/xiaohongshu/creator/note/suggest/tags', {
    method: 'post',
    data
  })
}

export function getCustomizeTag(data: { name: string, tag: string }) {
  return request('/local/xiaohongshu/creator/note/customize/tag', {
    method: 'post',
    data
  })
}

export function editImage(data: { images: string[], suggestion: string, model: string }) {
  return request('/local/xiaohongshu/note/image/edit', {
    method: 'post',
    data
  })
}

export function uploadLocalImage(data: { file: File }) {
  const formData = new FormData();
  formData.append('file', data.file, data.file.name);

  return request('/local/utils/uploadOSS', {
    method: 'post',
    data: formData
  });
}
