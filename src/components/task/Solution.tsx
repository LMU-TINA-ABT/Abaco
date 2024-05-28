import StellenWertTafel from "../stellenwerttafel/StellenWertTafel";

type SolutionProps = {
    numberBase: number;
    numberOfRows: number;
    stellen: number;
}

const Solution: React.FC<SolutionProps> = (props: SolutionProps) => {
    return (
        <div>
            <StellenWertTafel numberBase={props.numberBase} numberOfRows={props.numberOfRows} stellen={props.stellen}/>
        </div>
    );
}

export default Solution;
