import { useState } from 'react';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Pressable } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const [categoria, setCategoria] = useState('todos');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Logo + Título */}
      <ThemedView style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Instituto_Federal_do_Maranh%C3%A3o_-_Marca_Vertical_2015.svg/3840px-Instituto_Federal_do_Maranh%C3%A3o_-_Marca_Vertical_2015.svg.png',
          }}
          style={styles.logo}
          contentFit="contain"
        />

        <ThemedText type="title" style={styles.logoText}>
          Biblioteca IFMA - Timon 📚
        </ThemedText>
      </ThemedView>

      {/* Perfil */}
      <ThemedView style={styles.profileCard}>
        <ThemedText style={styles.name}>
          Maria Clara Barros Magalhães
        </ThemedText>

        <ThemedText style={styles.course}>
          Informática 2024
        </ThemedText>

        <ThemedText style={styles.quote}>
          Ler livros é a melhor forma de aprender algo novo.
        </ThemedText>
      </ThemedView>

      {/* Botões de categorias */}
      <ThemedView style={styles.buttonsContainer}>
        <Pressable
          style={[
            styles.button,
            categoria === 'todos' && styles.activeButton,
          ]}
          onPress={() => setCategoria('todos')}>
          <ThemedText style={styles.buttonText}>Todos</ThemedText>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            categoria === 'fantasia' && styles.activeButton,
          ]}
          onPress={() => setCategoria('fantasia')}>
          <ThemedText style={styles.buttonText}>Fantasia</ThemedText>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            categoria === 'romance' && styles.activeButton,
          ]}
          onPress={() => setCategoria('romance')}>
          <ThemedText style={styles.buttonText}>Romance</ThemedText>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            categoria === 'terror' && styles.activeButton,
          ]}
          onPress={() => setCategoria('terror')}>
          <ThemedText style={styles.buttonText}>Terror</ThemedText>
        </Pressable>
      </ThemedView>

      {/* Fantasia */}
      {(categoria === 'todos' || categoria === 'fantasia') && (
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">
            🏰 As Crônicas de Nárnia
          </ThemedText>

          <ThemedText style={styles.author}>
            Autor: C. S. Lewis
          </ThemedText>

          <Image
            source={{
              uri: 'https://harpercollins.com.br/cdn/shop/files/9786560051959_f7c24963-6dd6-41c9-bdba-739f5e4cbec5.jpg?v=1781712870&width=350',
            }}
            style={styles.bookImage}
            contentFit="cover"
          />
        </ThemedView>
      )}

      {/* Romance */}
      {(categoria === 'todos' || categoria === 'romance') && (
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">
            ❤️ A Hora da Estrela
          </ThemedText>

          <ThemedText style={styles.author}>
            Autor: Clarice Lispector
          </ThemedText>

          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/I/61TaHURu27L._SL1000_.jpg',
            }}
            style={styles.bookImage}
            contentFit="cover"
          />
        </ThemedView>
      )}

      {/* Terror */}
      {(categoria === 'todos' || categoria === 'terror') && (
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">
            👻 A Queda da Casa de Usher e Outros Contos
          </ThemedText>

          <ThemedText style={styles.author}>
            Autor: Edgar Allan Poe
          </ThemedText>

          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/I/71IkspIsl0L._AC_UF1000,1000_QL80_.jpg',
            }}
            style={styles.bookImage}
            contentFit="cover"
          />
        </ThemedView>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#FAFAFC',
    flexGrow: 1,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    gap: 15,
    backgroundColor: 'transparent',
  },

  logo: {
    width: 85,
    height: 85,
  },

  logoText: {
    fontSize: 26,
    fontWeight: 'bold',
    flexShrink: 1,
  },

  profileCard: {
    backgroundColor: '#EFE7FF',
    padding: 20,
    borderRadius: 30,
    marginBottom: 25,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#222',
  },

  course: {
    fontSize: 16,
    color: '#6207ac',
    marginBottom: 5,
    fontWeight: '600',
  },

  quote: {
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#555',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 25,
    backgroundColor: 'transparent',
  },

  button: {
    backgroundColor: '#9D7BDB',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },

  activeButton: {
    backgroundColor: '#6207ac',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#EFE7FF',
    padding: 18,
    marginBottom: 20,
    borderRadius: 20,

    shadowColor: '#000000de',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  author: {
    marginTop: 5,
    marginBottom: 12,
    fontSize: 15,
    color: '#444',
  },

  bookImage: {
    width: 180,
    height: 270,
    alignSelf: 'center',
    borderRadius: 12,
  },
});
