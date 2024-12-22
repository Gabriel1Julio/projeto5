import styled from 'styled-components'

export const CorpoForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        display: flex;
        margin-top: 80px;

        input {
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            transition: border-color 0.3s ease;
            margin-right: 5px;
        }

        input:focus {
            border-color: #007BFF;
            outline: none;
        }
    
        button {
            background-color: #03C03C;
            border: none;
            padding: 10px;
            border-radius: 4px;
        }
    }


    table {
        width: 60%;
        margin-top: 50px;
        text-align: center;
        border-collapse: collapse;

        thead {
            background-color: black;
            color: #fff;
        }

        th, td {
            padding: 10px;               
        }
        
        tr {
            border: 1px solid #ccc;
        }

        tbody {                
            tr:nth-child(even) {
                background-color: #f9f9f9;  
            }

            tr:hover {
                background-color: #ddd; 
            }
        }

        #excluir, #editar {
            margin-right: 4px;
            border: none;
            width: 40px;
            color: #fff;
            cursor: pointer;
            height: 30px;
            border-radius: 8px;
            padding 10px
        }

        #excluir {
            background-color: red;
        }

        #editar {
            background-color: blue;
        }
    }
`
