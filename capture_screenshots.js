import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  try {
    await page.goto('http://localhost:5000', { waitUntil: 'networkidle0' });
    
    // Captura da página completa
    await page.screenshot({ 
      path: 'site_screenshots/pagina_completa.png', 
      fullPage: true 
    });
    
    // Captura da seção Hero
    await page.screenshot({ 
      path: 'site_screenshots/secao_hero.png',
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });
    
    // Scroll para seção de conteúdo
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.screenshot({ 
      path: 'site_screenshots/secao_conteudo.png',
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });
    
    // Scroll para seção de bônus
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.screenshot({ 
      path: 'site_screenshots/secao_bonus.png',
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });
    
    // Scroll para testimonials
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.screenshot({ 
      path: 'site_screenshots/secao_testimonials.png',
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });
    
    // Scroll para FAQ e CTA
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.screenshot({ 
      path: 'site_screenshots/secao_faq_cta.png',
      clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });
    
    console.log('Screenshots capturadas com sucesso!');
    
  } catch (error) {
    console.error('Erro ao capturar screenshots:', error);
  } finally {
    await browser.close();
  }
})();