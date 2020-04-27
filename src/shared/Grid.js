import * as React from 'react'

export default function Grid ({ repos }) {
 return (
    <ul className='grid'>
      {repos.map(({ name, owner, stargazers_count, html_url }, i) => (
        <li key={name}>
          <h2>#{i+1}</h2>
          <h3><a href={html_url}>{name}</a></h3>
          <p>by <a href={`https://github.com/${owner.login}`}>@{owner.login}</a></p>
          <p>{stargazers_count.toLocaleString()} stars</p>
        </li>
      ))}
    </ul>
 )
}