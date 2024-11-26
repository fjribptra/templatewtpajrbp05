
function toggleAccordion(itemId) {
    const content = document.getElementById(`content-${itemId}`);
    const icon = document.getElementById(`icon-${itemId}`);
    const isHidden = content.classList.contains('hidden');

    // Hide all content
    document.querySelectorAll('[id^="content-"]').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('[id^="icon-"]').forEach(el => el.classList.remove('rotate-180'));

    if (isHidden) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
    }
}