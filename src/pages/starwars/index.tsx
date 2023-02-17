import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useAllFilmsQuery } from "@/graphql/generated/hooks";
import graphqlRequestClient from "@/graphql/clients/graphqlRequestClient";

export default function Home() {
  const { data, isLoading, isFetching } = useAllFilmsQuery(
    graphqlRequestClient,
    undefined,
    { refetchIntervalInBackground: true, refetchInterval: 5 * 1000 }
  );
  return (
    <>
      <Head>
        <title>Starwars</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          {isFetching ? "Refetching..." : "Up to date"}
        </div>
        <div className={styles.description}>
          <pre>
            <code className={styles.code}>
              {!isLoading
                ? JSON.stringify(data?.allFilms, null, 2)
                : "loading..."}
            </code>
          </pre>
        </div>
      </main>
    </>
  );
}
