import { Component, useState } from "react";

class QuoteViewer extends Component {
    componentDidMount() {
        console.log("Компонент смонтирован...");
    }

    componentDidUpdate() {
        console.log("Компонент обновлен...");
    }

    componentWillUnmount() {
        console.log("Компонент удален.");
    }

    quotes = [
        "Lorem ipsum dolor sit.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem, ipsum dolor.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolorum.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ];

    state = {
        quote: "",
    };

    randomQuote = () => {
        this.setState({
            quote: this.quotes[Math.floor(Math.random() * this.quotes.length)],
        });
    };

    render() {
        return (
            <>
                <h1>Просмотр цитат</h1>
                <span>{this.state.quote}</span>
                <button onClick={this.randomQuote}>Следующая цитата</button>
            </>
        );
    }
}

function AppQuoteViewer() {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? "Скрыть цитаты" : "Показать цитаты"}
            </button>

            {show && <QuoteViewer />}
        </>
    );
}

export default AppQuoteViewer;
