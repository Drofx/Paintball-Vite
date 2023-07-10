function Section(props:any) {
  return (
    <section className="items-center w-full justify-center flex flex-col"> 
        <div className="max-w-128 w-11/12 lg:px-0 px-5 ">
            {props.children}
        </div>  
  </section>
  )
}

export default Section