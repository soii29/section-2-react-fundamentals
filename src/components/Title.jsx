export default function Title(props){
    // console.log('props: ',props);
    return (
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{props.text}</h1>
    )
}