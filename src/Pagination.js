
const Pagination = ({changePage}) => {
  return (
    <div className="pagination">
         <button onClick={(e) => changePage(0)}>1</button>
         <button onClick={(e) => changePage(10)}>2</button>
         <button onClick={(e) => changePage(20)}>3</button>
         <button onClick={(e) => changePage(30)}>4</button>
         <button onClick={(e) => changePage(40)}>4</button>
    </div>
  )
}

export default Pagination