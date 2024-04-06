const codeReader = new ZXing.BrowserQRCodeReader();


codeReader
  .decodeFromInputVideoDevice(undefined, 'video')
  .then(result => {
    console.log(result.text);
  })
  .catch(err => {
    console.error(err);
  });