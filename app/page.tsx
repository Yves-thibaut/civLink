'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Globe, TrendingUp, Award, Heart, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { statistics } from '@/lib/data';

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Users,
      title: 'Réseautage OSC',
      description: 'Connectez-vous avec plus de 1200 OSC à travers l\'Afrique',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Opportunités',
      description: 'Accédez à 150+ opportunités de financement et formation',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Portée Continentale',
      description: 'Présence dans 89 pays africains',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      title: 'Impact Mesurable',
      description: '45M€ de financements facilités depuis 2020',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const testimonials = [
    {
      name: 'Aminata Traoré',
      organization: 'EduAfrica - Sénégal',
      content: 'Grâce à OSC Connect, nous avons pu établir des partenariats avec 15 OSC dans la région et obtenir un financement de 90,000€ pour notre projet d\'alphabétisation numérique.',
      image: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg'
    },
    {
      name: 'Dr. James Mwangi',
      organization: 'Green Belt Movement - Kenya',
      content: 'Cette plateforme nous a permis de partager nos innovations environnementales avec d\'autres OSC et de créer un réseau de 200+ organisations engagées pour le climat.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg'
    },
    {
      name: 'Marie-Claire Ndongo',
      organization: 'Women Empowerment Hub - Ghana',
      content: 'En 6 mois, nous avons trouvé 5 nouveaux bailleurs et formé 500 femmes entrepreneures grâce aux connexions établies sur OSC Connect.',
      image: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg'
    }
  ];

  const impactNumbers = [
    { number: statistics.oscs.toLocaleString(), label: 'OSC connectées', icon: Users },
    { number: statistics.countries, label: 'Pays représentés', icon: Globe },
    { number: statistics.opportunities, label: 'Opportunités actives', icon: TrendingUp },
    { number: statistics.collaborations.toLocaleString(), label: 'Collaborations créées', icon: Heart }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold text-gray-900">OSC Connect</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-orange-600 transition-colors">
                Accueil
              </Link>
              <Link href="/directory" className="text-gray-700 hover:text-orange-600 transition-colors">
                Répertoire
              </Link>
              <Link href="/opportunities" className="text-gray-700 hover:text-orange-600 transition-colors">
                Opportunités
              </Link>
              <Link href="/map" className="text-gray-700 hover:text-orange-600 transition-colors">
                Carte
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline">Connexion</Button>
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                  Tableau de bord
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 py-20 lg:py-32 overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connectons les{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
                OSC d'Afrique
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              La première plateforme continentale dédiée aux Organisations de la Société Civile africaines. 
              Partagez, collaborez, grandissez ensemble pour un impact durable.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-slide-up">
              {impactNumbers.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg mb-3 group-hover:shadow-xl transition-shadow duration-300">
                    <stat.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {typeof stat.number === 'string' ? stat.number : stat.number.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8">
                  Rejoindre la communauté
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/directory">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Explorer les OSC
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir OSC Connect ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une plateforme complète pensée pour les besoins spécifiques des OSC africaines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos membres
            </h2>
            <p className="text-xl text-gray-600">
              Des témoignages authentiques de leaders d'OSC à travers l'Afrique
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <blockquote className="text-lg text-gray-700 mb-4 italic">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                    <div className="text-orange-600">{testimonials[currentTestimonial].organization}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Histoires de succès
            </h2>
            <p className="text-xl text-gray-600">
              Des collaborations qui transforment l'Afrique
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                  alt="Success story"
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-green-500">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Terminé
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Alliance pour l'Éducation Numérique
                </h3>
                <p className="text-gray-600 mb-4">
                  5 OSC de l'Afrique de l'Ouest se sont unies pour former 10,000 jeunes aux compétences numériques.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Sénégal, Mali, Burkina Faso, Ghana, Côte d'Ivoire
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
                  alt="Success story"
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-green-500">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Terminé
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Réseau Climat Afrique
                </h3>
                <p className="text-gray-600 mb-4">
                  12 OSC environnementales ont coordonné la plantation de 500,000 arbres en 6 mois.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Kenya, Éthiopie, Tanzanie, Ouganda
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/6303669/pexels-photo-6303669.jpeg"
                  alt="Success story"
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-blue-500">
                  Actif
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Initiative Santé Maternelle
                </h3>
                <p className="text-gray-600 mb-4">
                  8 OSC santé collaborent pour réduire la mortalité maternelle dans 50 villages ruraux.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Mali, Niger, Tchad, Cameroun
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/success-stories">
              <Button variant="outline" size="lg">
                Voir toutes les histoires
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à rejoindre la plus grande communauté d'OSC d'Afrique ?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Connectez-vous avec des milliers d'organisations, accédez à des opportunités exclusives 
            et amplifiez votre impact à travers le continent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-50 text-lg px-8">
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/directory">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8">
                Explorer la plateforme
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <span className="text-lg font-bold">OSC Connect</span>
              </div>
              <p className="text-gray-400">
                La plateforme qui connecte et amplifie l'impact des OSC africaines.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Plateforme</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/directory" className="hover:text-white transition-colors">Répertoire OSC</Link></li>
                <li><Link href="/opportunities" className="hover:text-white transition-colors">Opportunités</Link></li>
                <li><Link href="/map" className="hover:text-white transition-colors">Carte interactive</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Guide utilisateur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Formations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@oscconnect.africa</li>
                <li>+221 33 123 45 67</li>
                <li>Dakar, Sénégal</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OSC Connect. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}