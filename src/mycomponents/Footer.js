import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

function Footer(props) {
    const [data1, setData1] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/mojombo`)
            .then((response) => response.json())
            .then(setData1);
    }, []);

    if (data1) {
        return ( <
            > {
                /* <div style={{ width: "100%", border: "2px solid blue", margin: "10px" }} >
                                    {JSON.stringify(data1)}
                                </div> */
            }

            <
            div > { /* <h3>Name: {data1.name}</h3> */ } <
            /div> <
            div >

            <
            ul > {
                props.lists.map((list, i) => < li key = { i } > { list.name } < /li>)}

                    { /* {props.lists.map((list) => <li>{list.name}</li>)} */ } { /*  const {items}=props.lists; */ }


                    <
                    /ul> <
                    div > { /* {props.lists.map((list) => <p>{list.name}</p>)} */ } <
                    /div> <
                    div style = {
                        { background: "skyblue", textAlign: "center" } } >
                    <
                    h3 > Copyright { props.year } < /h3> <
                    /div> <
                    /div> <
                    />
                );
            }

            return ( <
                div > "no user available" < /div>
            );



        }

        export default Footer