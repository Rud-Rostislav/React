export default function Stats({items}) {
    if (!items.length) return <footer className="Stats">
        <p>Start adding items</p>
    </footer>
    const doneItems = items.filter(item => item.done);
    const donePersent = doneItems.length / items.length * 100;
    return (<footer className="Stats">
        {donePersent === 100 ? 'Виконано всі завдання' : `Із ${items.length} справ виконано ${doneItems.length} (${donePersent.toFixed(2)}%)`}
    </footer>);
}