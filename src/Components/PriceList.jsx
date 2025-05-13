const PriceList = ({openModal}) => {
    return (
        <section className="price-list-container">
            <div className="price-card">
                <h2>Free</h2>
                <p>$0 / month</p>
                <ul className="price-card-list">
                    <li>Sync unlimited devices</li>
                    <li>10 GB monthly uploads</li>
                    <li>Customize Home dashboard and access extra widgets</li>
                    <li>Connect primary Google Calendar account</li>
                    <li>Add due dates, reminders, and notifications to your tasks</li>
                </ul>
                <button className="get-started-button" onClick={openModal}>Get started</button>
            </div>
            <div className="price-card personal">
                <h2>Personal</h2>
                <p>$10 / month</p>
                <ul className='price-card-list'>
                    <li>Sync unlimited devices</li>
                    <li>10 GB monthly uploads</li>
                    <li>Customize Home dashboard and access extra widgets</li>
                    <li>Connect primary Google Calendar account</li>
                    <li>Add due dates, reminders, and notifications to your tasks</li>
                </ul>
                <button className="get-started-button" onClick={openModal}>Get started</button>
             </div>
            <div className="price-card">
                <h2>Company</h2>
                <p>$50 / month</p>
                <ul className='price-card-list'>
                    <li>Sync unlimited devices</li>
                    <li>10 GB monthly uploads</li>
                    <li>Customize Home dashboard and access extra widgets</li>
                    <li>Connect primary Google Calendar account</li>
                    <li>Add due dates, reminders, and notifications to your tasks</li>
                </ul>
                <button className="get-started-button" onClick={openModal}>Get started</button>
            </div>
        </section>
    )
}

export default PriceList;