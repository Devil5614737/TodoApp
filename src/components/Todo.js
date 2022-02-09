import { motion } from "framer-motion";




const Todo=({cancel,todoModal})=>{
    // console.log(todoModal)
    return <motion.div   className="todoo">
        <div className="todoo-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a quibusdam nemo tempora exercitationem.
                lorem1000</p>
            <div className="buttons">
                <button>edit</button>
                <button>delete</button>
                <button onClick={cancel}>cancel</button>
            </div>
        </div>
    </motion.div>
}

export default Todo;