import '@playwright/test';
import { test, expect } from '@playwright/test';

const URL = 'http://localhost:5173';

test('exibe os input do desafio corretamente', async ({ page }) => {
	await page.goto(URL);

	const pagina = await page.waitForSelector('#start-challenge');
	const PageisVisible = await pagina.isVisible();
	expect(PageisVisible).toBe(true);

	await expect(page.locator('#name')).toHaveValue('');
	await expect(page.locator('#phone')).toHaveValue('');
	await expect(page.locator('#email')).toHaveValue('');
});

test('Teste de exibição do modal', async ({ page }) => {
	await page.goto(URL);

	// Esperar até que o botão "Iniciar Desafio" seja exibido
	const pagina = await page.waitForSelector('#start-challenge');
	const PageisVisible = await pagina.isVisible();
	expect(PageisVisible).toBe(true);

	// Clicar no botão "Iniciar Desafio"
	await page.click('button:has-text("Iniciar Desafio")');

	// Esperar até que o modal seja exibido
	const modalOverlay = await page.waitForSelector('#modal-overlay');

	// Verificar se o modal está visível
	const isVisible = await modalOverlay.isVisible();
	expect(isVisible).toBe(true);

	// Verificar o texto do modal
	const modalText = await page.innerText('.bg-white.p-6.rounded-lg.shadow-md.relative h2');
	expect(modalText).toContain('Desafio finalizado com falha!');
});

test('Teste de preenchimento do modal', async ({ page }) => {
	await page.goto(URL);

	// Esperar até que o botão "Iniciar Desafio" seja exibido
	const pagina = await page.waitForSelector('#start-challenge');
	const PageisVisible = await pagina.isVisible();
	expect(PageisVisible).toBe(true);

	// Clicar no botão "Iniciar Desafio"
	await page.click('button:has-text("Iniciar Desafio")');

	// Preencher os campos do formulário
	await page.fill('input#name', 'Nome do Candidato');
	await page.fill('input#phone', '123456789');
	await page.fill('input#email', 'teste@example.com');

	// Clicar no botão "Enviar"
	await page.click('button:has-text("Enviar")');

	// Esperar até que o modal de sucesso seja exibido
	const successModalOverlay = await page.waitForSelector('#modal-overlay');

	// Verificar se o modal de sucesso está visível
	const isSuccessModalVisible = await successModalOverlay.isVisible();
	expect(isSuccessModalVisible).toBe(true);

	// Verificar o texto do modal de sucesso
	const successModalText = await page.innerText('.bg-white.p-6.rounded-lg.shadow-md.relative h2');
	expect(successModalText).toContain('Desafio finalizado com sucesso!');
});
