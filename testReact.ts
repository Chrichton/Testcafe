import { Selector } from 'testcafe';

fixture `React Test`
    .page `http://localhost:3000/`;

test('My first test', async t => {
    const selector = Selector('[data_id="App-Link"]')
    await t
    .expect(selector.textContent).eql('Learn React')

    await t
        .click(selector);

    await t
        .expect(Selector('h1').textContent).eql('React')
    
});