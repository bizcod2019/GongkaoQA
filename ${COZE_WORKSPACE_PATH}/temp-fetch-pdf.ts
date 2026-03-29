import { FetchClient, Config } from 'coze-coding-dev-sdk';

async function fetchPDF() {
  const config = new Config();
  const client = new FetchClient(config);
  
  const pdfUrl = 'https://coze-coding-project.tos.coze.site/create_attachment/2026-03-29/1171442932661879_83fec751ecd872aee31f8bd775b6c061_%EF%BC%88%E5%85%A8%E9%9D%A2%E6%8F%90%E5%8D%87%E7%89%88%EF%BC%89%E7%BB%93%E6%9E%84%E5%8C%96%E9%9D%A2%E8%AF%95%E5%90%84%E9%A2%98%E5%9E%8B%E6%A8%A1%E6%9D%BF%E6%80%BB%E7%BB%93.pdf?sign=4896832068-27b5ab8c44-0-5aeb1ae59ba0cd03f7f2575ffc00521e3042d95e12c39455387f49ab6a293b35';
  
  const response = await client.fetch(pdfUrl);
  
  console.log('Title:', response.title);
  console.log('Status:', response.status_code);
  
  // 提取文本内容
  const textContent = response.content
    .filter(item => item.type === 'text')
    .map(item => item.text)
    .join('\n');
  
  console.log('\n=== PDF内容 ===\n');
  console.log(textContent);
}

fetchPDF().catch(console.error);
