export const mimeTypes = {
  text: {
    plain: 'text/plain',
    html: 'text/html',
    javascript: 'text/javascript',
    css: 'text/css',
    csv: 'text/csv'
  },
  image: {
    jpeg: 'image/jpeg',
    png: 'image/png'
  },
  audio: {
    mpeg: 'audio/mpeg',
    ogg: 'audio/ogg',
    '*': 'audio/*'
  },
  video: {
    mp4: 'video/mp4'
  },
  application: {
    json: 'application/json',
    stream: 'application/octet-stream',
    pdf: 'application/pdf',
    excel: 'application/vnd.ms-excel',
    msword: 'application/msword'
  }
}

mimeTypes.default = mimeTypes.application.stream

export const getBaseMimeType = mimeType => {
  try {
    return mimeType.split('/').shift()
  } catch (ex) {
    console.error(ex, { mimeType })
    return 'application'
  }
}
