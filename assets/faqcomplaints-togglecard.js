document.addEventListener('DOMContentLoaded', function () {
    const button1 = document.querySelector('.faq-wedding-toggle .faq-header h2:first-child');
    const button2 = document.querySelector('.faq-wedding-toggle .faq-header h2:nth-child(2)');
    const Card1 = document.querySelector('.faq-wedding-toggle .faq-card:nth-child(2)');
    const Card2 = document.querySelector('.faq-wedding-toggle .faq-card:nth-child(3)');
    
    // on clicking the first button
    button1.addEventListener('click', function () {
        // Reset border style for the second button
        button1.style.borderBottom = '2px solid #4A4A4A';

        // Change border style for the first button
        button2.style.borderBottom = '2px solid #B9B9B9';
        // card to display none card 1 display block
        Card1.style.display = 'flex';
        Card2.style.display = 'none';
    });

    // on clicking the second button
    button2.addEventListener('click', function () {
        // Reset border style for the first button
        button2.style.borderBottom = '2px solid #4A4A4A';

        // Change border style for the second button
        button1.style.borderBottom = '2px solid #B9B9B9';
        // card to display none card 2 display block
        Card2.style.display = 'flex';  
        Card1.style.display = 'none';
    });
});
