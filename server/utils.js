function convertToXML(jsonObject, rootElement) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += `<${rootElement}>`;

  const appendDataToXml = (data, key) => {
    if (Array.isArray(data)) {
      for (const item of data) {
        xml += key ? `<${key}>` : '';
        appendDataToXml(item, key);
        xml += key ? `</${key}>` : '';
      }
    } else if (data instanceof Object) {
      for (let key in data) {
        xml += key ? `<${key}>` : '';
        appendDataToXml(data[key], key);
        xml += key ? `</${key}>` : '';
      }
    } else {
      xml += data;
    }
  };

  appendDataToXml(jsonObject, null);
  xml += `</${rootElement}>`;
  return xml;
}

module.exports = {
  convertToXML
}
