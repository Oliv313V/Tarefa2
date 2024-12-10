const Chalenge = () => {

    const x = 5;
    const y = 10;

    return (
        <div>
            <p> primeiro número: { x }</p>
            <p> segundo número: { y }</p>
            <button onClick={() => console.log(x+y)}>Clique para somar os dois números</button>   
        </div>
    );

};

export default Chalenge;