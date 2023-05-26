import React from 'react';
import ReactDOM from 'react-dom/client';
import 'E:/JS/cdid/sandbox/src/asset/flex.css';
import Accordion from 'E:/JS/cdid/sandbox/src/asset/accordion.js';

const flex = () => {
    
    return(

        <div>
            <div className='left'>1
            <div>
                <div className='icon'>nama Buku</div>
                <div className='icon'>no hp</div>
                <div className='icon'>nama peminjam</div>
                <div className='icon'>alamat peminjam</div>
            </div>
            <div>
                <div className='word'>nama Buku</div>
                <div className='word'>no hp</div>
                <div className='word'>nama peminjam</div>
                <div className='word'>alamat peminjam</div>
            </div>
            </div>
            <div className='right'>2</div>
            <div className='down'>3
            <div className='judul'>
                <Accordion></Accordion>
            </div>
            </div>
        </div>
    );
}

export default flex;
