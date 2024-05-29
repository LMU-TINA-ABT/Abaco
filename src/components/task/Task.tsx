import TaskHeader from "./TaskHeader";
import StellenWertTafel from "../stellenwerttafel/StellenWertTafel";

type TaskProps = {
    numberBase: number;
    numberOfRows: number;
    stellen: number;
    callBackOnStateChange: Function;
}

const Task: React.FC<TaskProps> = (props: TaskProps) => {
    return (
        <div>
            <TaskHeader/>
            <StellenWertTafel numberBase={props.numberBase} numberOfRows={props.numberOfRows} stellen={props.stellen}
                              callBackOnStateChange={props.callBackOnStateChange}/>
        </div>
    );
}

export default Task;
