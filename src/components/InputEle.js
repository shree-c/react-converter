const InputEle = ({ inpTex, onChange }) => {
  return (
    <>
      <input value={inpTex} type='number' onChange={onChange}></input>
    </>
  )
}

export default InputEle
