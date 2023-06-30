export default function Footer() {
    const hour = new Date().getHours();
    const openHours = 9;
    const closeHours = 18;
    const isOpen = hour >= openHours && hour <= closeHours ? "We're currently open!" : "We're currently closed!";

    return (
        <footer>
            <p>We work from {openHours} to {closeHours} hours</p>
            {isOpen}
        </footer>
    );
}