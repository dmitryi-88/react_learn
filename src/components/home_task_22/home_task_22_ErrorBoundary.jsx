import styles from "../../styles/home_task_22/home_task_22_ErrorBoundary.module.scss";
import { cloneElement, Component } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        restart: false,
    };

    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }

    handleRestart = () => {
        this.setState({
            hasError: false,
            restart: true,
        });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.error}>
                    <h3>Не удалось загрузить компонент.</h3>
                    <button onClick={this.handleRestart}>
                        Попробовать снова
                    </button>
                </div>
            );
        }

        if (this.state.restart) {
            return cloneElement(this.props.children, {
                error: false,
            });
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
