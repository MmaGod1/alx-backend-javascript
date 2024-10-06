export default function(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload】)
  .then((first) => first);
}
