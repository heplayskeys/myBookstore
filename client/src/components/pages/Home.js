import React from "react";

function Home(props) {

    let results = [];

    if (props.books.length > 0) {
        results = props.books.map(item => {
            return (
                <li key={item.id} type="none" style={{border: "2px solid #dee2e6", padding: "10px", marginBottom: "25px", backgroundColor: "#ffffff", boxShadow: "0 8px 6px -6px #000000"}}>
                    <div className="container">
                        <h4>{item.volumeInfo.title}</h4>
                        <h6>Written by: {item.volumeInfo.authors.join(", ")}</h6>
                        <hr />
                        
                        <div className="row">
                            <div className="col-md-2">
                                <img className="img-thumbnail" src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} />
                            </div>
                            <div className="col-md-10">
                                <p>{item.volumeInfo.description}</p>
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-md-6 text-right">
                                <button className="btn btn-outline-success" onClick={() => props.saveBook(item.id, item.volumeInfo.title, item.volumeInfo.authors, item.volumeInfo.description, item.volumeInfo.imageLinks.thumbnail, item.selfLink)}>Add to Saved List</button>
                            </div>
                            <div className="col-md-6 text-left">
                                <a className="btn btn-outline-warning" href={item.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">View in Google</a>                            
                            </div>
                        </div>

                    </div>
                </li>
            )
        });
    }
    else {
        results = <li type="none">There are currently no results to display. Search a book title, above!</li>;
    }
    
    
    return (
        <div style={{padding: "0 20px"}}>
    
            <div className="jumbotron text-center bg-light" style={{border: "1px solid #dee2e6", paddingBottom: "30px"}}>
                <h1>(React) Google Book Search</h1>
                <br />
                <hr />
                <br />
                <h5>
                    Search for and save books of interest!
                </h5>
            </div>
    
            <section className="bookSearch" style={{border: "1px solid #dee2e6", borderRadius: ".25rem", padding: "20px", overflow: "auto"}}>
                <h3>Book Search</h3><br />
                <label htmlFor="bookTitle">Book:</label><br />
                <input className={props.search ? "inputFocus" : null} type="text" placeholder="Enter Book Title" style={{width: "100%", padding: "0 5px"}} onChange={props.handleInput} onKeyPress={props.enterPressed} value={props.search}></input><br /><br />
                <button className="btn btn-outline-dark" style={{float: "right"}} onClick={props.handleClick}>Search</button>
            </section>
    
            <br />
    
            <section className="bg-light" style={{border: "1px solid #dee2e6", borderRadius: ".25rem", padding: "20px", overflow: "auto"}}>
                <h3>Results</h3><br />
                <ul style={{padding: "0"}}>
                    {results}
                </ul>
            </section>
        </div>
    );
}

export default Home;