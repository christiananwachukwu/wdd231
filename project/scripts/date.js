export function setFooterInfo() {
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    const lastModifiedP = document.getElementById('lastModified');
    if (lastModifiedP) {
        const lastModified = document.lastModified;
        lastModifiedP.textContent = `Last Modified: ${lastModified}`;
    }
}