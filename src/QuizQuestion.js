export default function QuizQuestion({ props }) {
    let answer = '';

    switch (props.opperator) {
        case '+':
            answer = props.x + props.y;
            break;
        case '-':
            answer = props.x - props.y;
            break;
        case '*':
            answer = props.x * props.y;
            break;
        case '/':
            answer = props.x / props.y;
            break;
    }

    return (
        <div>
            <p>{ props.x } { props.operation } { props.y } = { props.showAnswer ? '' : answer }</p>
        </div>
    );
}