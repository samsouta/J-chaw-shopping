import React, { useContext } from 'react'
import { stateContext } from '../../contexts/StateContext';

const About_our_values = () => {
  const { valuesRef } = useContext(stateContext);

  return (
    <div ref={valuesRef} id='about-values' className=' mt-40 px-6' >
      <div className=' w-[600px]' >
        <h1 className=' text-nun font-extrabold text-3xl' >Our values</h1>
        <p className=' text-mon text-md' >Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </div>
      <div className=' grid grid-cols-3 mt-20 gap-5' >
        <div className=' col-span-1' >
            <h1 className=' text-nun font-extrabold text-lg' >Share everything you know</h1>
            <span className=' text-mon text-sm' >Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima..</span>
        </div>
        <div className=' col-span-1' >
            <h1 className=' text-nun font-extrabold text-lg' >Always learning</h1>
            <span className=' text-mon text-sm'>Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.</span>
        </div>
        <div className=' col-span-1' >
            <h1 className=' text-nun font-extrabold text-lg'>Be supportive</h1>
            <span className=' text-mon text-sm'>Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.</span>
        </div>
        <div className=' col-span-1' >
            <h1 className=' text-nun font-extrabold text-lg'>Be world-class</h1>
            <span className=' text-mon text-sm'>Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.</span>
        </div>
        <div className=' col-span-1' >
            <h1 className=' text-nun font-extrabold text-lg'>Take responsibility</h1>
            <span className=' text-mon text-sm'>Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.</span>
        </div>
        <div className=' col-span-1' >
            <h1 className=' text-nun font-extrabold text-lg'>Enjoy downtime</h1>
            <span className=' text-mon text-sm'>Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.</span>
        </div>
      </div>
    </div>
  )
}

export default About_our_values
