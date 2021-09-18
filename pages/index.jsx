import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
          <li><Link href="/users"><a>Users</a></Link></li>
        </ul>
      </header>
      <h1>Welcome Anam</h1>
    </div>
  );
}