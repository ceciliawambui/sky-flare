import React from 'react'

function Footer() {

    const year = new Date().getFullYear();

    return <footer>{`Copyright © SkyFlare IT Solutions and Office Supplies ${year}`}</footer>;


};

export default Footer