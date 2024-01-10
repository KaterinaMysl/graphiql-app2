import styles from './DocExplorer.module.css';

interface DocExplorerProps {
  schema: { name: string; kind: string }[];
}

export function DocExplorer({ schema }: DocExplorerProps) {
  return (
    schema && (
      <section className={styles.doc}>
        <h3 className={styles.heading}>Docs</h3>
        <ul className={styles.data}>
          {schema.map((type) => {
            return (
              <li key={type.name}>
                <span className={styles.name}>{type.name}</span>
                <span>{`: ${type.kind}`}</span>
              </li>
            );
          })}
        </ul>
      </section>
    )
  );
}
