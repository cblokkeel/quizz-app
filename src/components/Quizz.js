import { useRef } from 'react'

const Quizz = ({ questions, actualQuestion, handleValidate, hasFinished, score, handleReplay }) => {
    const { question, rep1, rep2, rep3, rep4, correct } = questions[actualQuestion]

    const checked = useRef()

    return (
        <section className='bg-white rounded-md shadow-md w-3/4 overflow-hidden' onSubmit={e => handleValidate(e, checked.current, correct)}>
            {
                !hasFinished ? (
                        <>
                            <h3 className='pl-4 pt-4 font-bold text-sm'>{question}</h3>
                            <form className='flex flex-col mt-4'>
                                <div className='pl-4'>
                                    <input type='radio' id='rep1' name='rep' value='rep1' required onClick={e => checked.current = e.target}/>
                                    <label className='ml-4 italic text-gray-600' htmlFor='rep1'>{rep1}</label>
                                </div>
                                <div className='pl-4'>
                                    <input type='radio' id='rep2' name='rep' value='rep2' required onClick={e => checked.current = e.target}/>
                                    <label className='ml-4 italic text-gray-600' htmlFor='rep2'>{rep2}</label>
                                </div>
                                <div className='pl-4'>
                                    <input type='radio' id='rep3' name='rep' value='rep3' required onClick={e => checked.current = e.target}/>
                                    <label className='ml-4 italic text-gray-600' htmlFor='rep3'>{rep3}</label>
                                </div>
                                <div className='pl-4 mb-4'>
                                    <input type='radio' id='rep4' name='rep' value='rep4' required onClick={e => checked.current = e.target}/>
                                    <label className='ml-4 italic text-gray-600' htmlFor='rep4'>{rep4}</label>
                                </div>
                                <button className='bg-blue-400 text-white p-2 outline-none' type='submit'>Valider</button>
                            </form>
                        </>
                ) : (
                    <>
                        <h1 className='p-12 text-lg text-gray-600'>Votre Score : {score/5*100}%</h1>
                        <button className='bg-blue-400 text-white w-full p-2 outline-none' onClick={handleReplay}>Rejouer ?</button>
                    </>
                )
            }
        </section>
    );
};

export default Quizz;