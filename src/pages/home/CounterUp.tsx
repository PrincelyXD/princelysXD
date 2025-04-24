import CountUp from "react-countup"
import { counterResources } from "../../resources/Constants"

const CounterUp = ({ref}:{ref:any}) => {
  return (
    <div ref={ref} id="counter" className=" padding-x-lg xl:mt-0 mt-32">
    <div className="mx-auto grid-4-cols" >
        {counterResources.map((item,idx)=>(
            <div  key={idx} className="bg-zinc-900 rounded-xl p-10 
             flex flex-col ">
            <div
             className="counter-number text-white text-5xl font-bold mb-2"
             >
            <CountUp enableScrollSpy scrollSpyOnce
             end={item.value} duration={1} /> {item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default CounterUp
