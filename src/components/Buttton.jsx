export default function Button(props){
    const {text, varient} = props
    const defaultBtnClasses = "px-6 py-3 font-medium rounded-full hover:shadow-lg transition-all duration-300"
    const primaryBtnClasses = "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    const normalBtnClasses = "border border-gray-300 text-gray-700"
    return(
        <button className={`
            ${defaultBtnClasses} 
            ${varient === 'primary' ? primaryBtnClasses : ""}
            ${varient === 'normal' ? normalBtnClasses : ""}`}>{text}</button>
    )
}