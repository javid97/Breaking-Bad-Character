
const Pagination = ({changePage}) => {
  return (
    <div className="pagination">
         <button onClick={(e) => changePage(0)}>1</button>
         <button onClick={(e) => changePage(12)}>2</button>
         <button onClick={(e) => changePage(24)}>3</button>
         <button onClick={(e) => changePage(36)}>4</button>
    </div>
  )
}

export default Pagination