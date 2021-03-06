const renderScalaris = ({ Localize }) => {
  const html = `
    <div class="main-area">
      <div class="section intro">
        <div class="section-header">
          <div class="section-header-text">${Localize.text('Scalaris DX is powered by the Blocknet Protocol', 'informationWindowScalaris')}</div>
        </div>
        <p>
    ${Localize.text('In addition to the information below, you can learn more about Scalaris <a href="#" class="text-link js-externalLink" data-link="https://docs.scalaris.info/">here</a>.', 'informationWindowScalaris')}
  </p>
</div>

<div class="section">
  <div class="section-header">
    <div class="section-header-text">${Localize.text('What is Scalaris?', 'informationWindowScalaris')}</div><div class="section-header-line"></div>
  </div>
  <p>
    ${Localize.text('Scalaris is a 2nd layer blockchain interoperability protocol that enables communication, interaction, and exchange between different blockchains. This allows for the development of multi-chain applications and blockchain microservices, creating exponentially more capabilities and possibilities for the blockchain ecosystem. Scalaris is a self-funded and self-governed open source project with contributors around the world building an open and collaborative ecosystem.', 'informationWindowScalaris')}
  </p>
</div>

<div class="section">
  <div class="section-header">
    <div class="section-header-text">${Localize.text('Technical Overview', 'informationWindowScalaris')}</div><div class="section-header-line"></div>
  </div>
  <p>
    ${Localize.text('Scalaris is a Proof-of-Stake (PoS) blockchain with a utility token called <a href="#" class="text-link js-externalLink" data-link="https://docs.scalaris.info/blockchain/introduction">SCA</a>. Unlike other currency-focused blockchains, Scalaris is a service-based blockchain comprised of 3 main components:', 'informationWindowScalaris')}
  </p>
  <p>
    <ul>
      <li>
        ${Localize.text('<strong>XRouter</strong> - Provides the Blocknet Protocol with a communication layer consisting of an inter-blockchain SPV backend that enables the verification of blockchain records without requiring users to download the full blockchain. XRouter allows applications to interface with blockchains on the TCP/IP networking layer, enabling a true Internet of Blockchains.', 'informationWindowScalaris')}
      </li>
      <li>
        ${Localize.text('<strong>XBridge</strong> - Provides the ability to perform trustless atomic swap exchanges between any blockchain that is supported by the Blocknet Protocol via APIs. XBridge allows any application to perform decentralized exchange, opening the door to an ecosystem of decentralized trading services.', 'informationWindowScalaris')}
      </li>
      <li>
        ${Localize.text('<strong>XCloud</strong> - Provides a decentralized microservice cloud network powered by XRouter. Developers will be able to put both blockchain and non-blockchain microservices on Scalaris???s ???public cloud??? decentralized network. XCloud allows applications to run entirely decentralized, opening the door to the possibility of monetizable, fully decentralized applications.', 'informationWindowScalaris')}
      </li>
    </ul>
  </p>
  <p>
    ${Localize.text('The Blocknet Protocol is designed to maximize interoperability between different blockchains through the use of these components. Just as the internet enabled computers to communicate, the Blocknet Protocol is critical for blockchains to realize full potential.', 'informationWindowScalaris')}
  </p>
</div>

<div class="section">
  <div class="section-header">
    <div class="section-header-text">${Localize.text('Nodes', 'informationWindowScalaris')}</div><div class="section-header-line"></div>
  </div>
  <p>
    ${Localize.text('The network is powered by 2 types of nodes:', 'informationWindowScalaris')}
  </p>
  <p>
    <li>
      ${Localize.text('<strong>Staking Nodes</strong> - Secures the network by staking SCA to verify the blockchain. This service earns 30% of block rewards.', 'informationWindowScalaris')}
    </li>
    <li>
      ${Localize.text('<strong>Service Nodes</strong> - Hosts the full nodes of compatible blockchains, hosts microservices, audits interactions, and performs anti-spam and anti-DOS measures for the network. This service earns 70% of block rewards and 100% of fees generated from use of the network\'s services.', 'informationWindowScalaris')}
    </li>
  </p>
  <p>
    ${Localize.text('The following are the requirements to operate each type of node:', 'informationWindowScalaris')}
  </p>
  <p>
    <li>
      ${Localize.text('<strong>Staking Nodes</strong> - A Staking Node can be operated with any amount of SCA, but staking more SCA yields more frequent rewards.', 'informationWindowScalaris')}
    </li>
    <li>
      ${Localize.text('<strong>Service Nodes</strong> - A Service Node requires 2500 SCA.', 'informationWindowScalaris')}
    </li>
  </p>
</div>

<div class="section">
  <div class="section-header">
    <div class="section-header-text">${Localize.text('Tokenomics', 'informationWindowScalaris')}</div><div class="section-header-line"></div>
  </div>
  <p>
    ${Localize.text('<a href="#" class="text-link js-externalLink" data-link="https://docs.scalaris.info/blockchain/introduction">SCA</a> is the utility token that powers the Scalaris. Fees are paid in SCA when using the network and 100% of those fees are distributed to Service Nodes for supporting the network and infrastructure. Normal transaction fees on the network are also paid in SCA, but those fees are burned. If seeking to acquire SCA, <a href="#" class="text-link js-externalLink" data-link="https://docs.scalaris.info/project/exchanges">there are various options available</a>.', 'informationWindowScalaris')}
  </p>
  <p>
    ${Localize.text('Scalaris involves multiple economic models with respect to the use of the SCA token:', 'informationWindowScalaris')}
  </p>
  <p>
    <li>
      ${Localize.text('<strong>Block Rewards</strong> - Scalaris is Proof-of-Stake(PoS) with 1 SCA created every minute, of which 30% is awarded to Staking Nodes and 70% to Service Nodes.', 'informationWindowScalaris')}
    </li>
    <li>
      ${Localize.text('<strong>Service Fees</strong> - Service Nodes receive 100% of SCA fees generated from the use of services on the network, including trades performed via XBridge, interfacing with blockchains via XRouter, and use of microservices via XCloud.', 'informationWindowScalaris')}
    </li>
    <li>
      ${Localize.text('<strong>Collateral</strong> - SCA is required for collateral to operate a Service Node, as well as to use certain services on the network.', 'informationWindowScalaris')}
    </li>
    <li>
      ${Localize.text('<strong>Governance</strong> - Submitting proposals to the network requires a fee to be paid in SCA and proposals can only be voted on by Service Nodes.', 'informationWindowScalaris')}
    </li>
    <li>
      ${Localize.text('<strong>Transaction Fees</strong> - Transferring funds on the network incurs a transaction fee paid in SCA.', 'informationWindowScalaris')}
    </li>
  </p>
  <p>
    ${Localize.text('The utility of the SCA token increases the buy pressure on the market, while the reward potential of operating a node reduces sell pressure on the market.', 'informationWindowScalaris')}
  </p>
</div>

</div>
`;

return html;
};

module.exports = renderScalaris;
