'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Award, Users, MapPin, Calendar, ExternalLink, Heart, MessageCircle, Share2 } from 'lucide-react';

export default function SuccessStoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('Tous les secteurs');

  const successStories = [
    {
      id: '1',
      title: 'Alliance pour l\'Éducation Numérique',
      description: '5 OSC de l\'Afrique de l\'Ouest se sont unies pour former 10,000 jeunes aux compétences numériques, créant un réseau de 200 formateurs certifiés.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      sector: 'Éducation',
      countries: ['Sénégal', 'Mali', 'Burkina Faso', 'Ghana', 'Côte d\'Ivoire'],
      impact: {
        beneficiaries: 10000,
        trainers: 200,
        duration: '18 mois',
        budget: '450,000€'
      },
      partners: ['EduAfrica', 'Tech4Africa', 'Youth Network', 'Digital Skills Hub', 'Innovation Lab'],
      status: 'completed',
      date: '2023-12-15',
      likes: 234,
      comments: 45,
      shares: 67
    },
    {
      id: '2',
      title: 'Réseau Climat Afrique',
      description: '12 OSC environnementales ont coordonné la plantation de 500,000 arbres en 6 mois, créant un impact carbone mesurable et un modèle réplicable.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      sector: 'Environnement',
      countries: ['Kenya', 'Éthiopie', 'Tanzanie', 'Ouganda', 'Rwanda'],
      impact: {
        trees: 500000,
        hectares: 2500,
        duration: '6 mois',
        budget: '800,000€'
      },
      partners: ['Green Belt Movement', 'Climate Action Network', 'Forest Guardians', 'Eco Warriors'],
      status: 'completed',
      date: '2023-11-20',
      likes: 456,
      comments: 89,
      shares: 123
    },
    {
      id: '3',
      title: 'Initiative Santé Maternelle',
      description: '8 OSC santé collaborent pour réduire la mortalité maternelle dans 50 villages ruraux, formant 300 sages-femmes et équipant 25 centres de santé.',
      image: 'https://images.pexels.com/photos/6303669/pexels-photo-6303669.jpeg',
      sector: 'Santé',
      countries: ['Mali', 'Niger', 'Tchad', 'Cameroun'],
      impact: {
        villages: 50,
        midwives: 300,
        centers: 25,
        budget: '650,000€'
      },
      partners: ['Médecins d\'Afrique', 'Health First', 'Rural Care', 'Maternal Health Alliance'],
      status: 'active',
      date: '2024-01-10',
      likes: 189,
      comments: 34,
      shares: 56
    },
    {
      id: '4',
      title: 'Forum Leadership Féminin',
      description: '200 femmes leaders formées aux postes de direction, créant un réseau continental de 500 entrepreneures et 50 élues locales.',
      image: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
      sector: 'Genre & Droits humains',
      countries: ['Ghana', 'Côte d\'Ivoire', 'Sénégal', 'Nigeria'],
      impact: {
        leaders: 200,
        entrepreneurs: 500,
        elected: 50,
        budget: '320,000€'
      },
      partners: ['Women Empowerment Hub', 'Leadership Academy', 'Political Women Network'],
      status: 'completed',
      date: '2023-10-05',
      likes: 312,
      comments: 67,
      shares: 89
    },
    {
      id: '5',
      title: 'Tech4Africa Hackathon',
      description: '500 jeunes développeurs ont participé à un hackathon continental, présentant 50 projets innovants et créant 15 startups technologiques.',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
      sector: 'Jeunesse & Innovation',
      countries: ['Rwanda', 'Nigeria', 'Kenya', 'Afrique du Sud'],
      impact: {
        participants: 500,
        projects: 50,
        startups: 15,
        budget: '280,000€'
      },
      partners: ['Tech4Africa', 'Africa Youth Network', 'Innovation Hub', 'Startup Incubator'],
      status: 'completed',
      date: '2023-09-15',
      likes: 567,
      comments: 123,
      shares: 234
    },
    {
      id: '6',
      title: 'Patrimoine Culturel Numérique',
      description: 'Digitalisation de 1000 heures de patrimoine oral africain, créant une bibliothèque numérique accessible à 50,000 utilisateurs.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      sector: 'Culture & Patrimoine',
      countries: ['Afrique du Sud', 'Mali', 'Sénégal', 'Éthiopie'],
      impact: {
        hours: 1000,
        users: 50000,
        languages: 12,
        budget: '180,000€'
      },
      partners: ['Ubuntu Cultural Foundation', 'Heritage Digital', 'Oral History Project'],
      status: 'active',
      date: '2024-02-01',
      likes: 145,
      comments: 28,
      shares: 45
    }
  ];

  const sectors = [
    'Tous les secteurs',
    'Éducation',
    'Environnement',
    'Santé',
    'Genre & Droits humains',
    'Jeunesse & Innovation',
    'Culture & Patrimoine',
    'Paix & Gouvernance'
  ];

  const filteredStories = successStories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'Tous les secteurs' || story.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  const totalImpact = {
    beneficiaries: successStories.reduce((sum, story) => sum + (story.impact.beneficiaries || 0), 0),
    projects: successStories.length,
    countries: new Set(successStories.flatMap(story => story.countries)).size,
    budget: successStories.reduce((sum, story) => sum + parseInt(story.impact.budget.replace(/[^\d]/g, '')), 0)
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Success Stories</h1>
          <p className="text-gray-600 mb-6">
            Découvrez les collaborations qui transforment l'Afrique et inspirent l'action collective
          </p>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Bénéficiaires</p>
                  <p className="text-2xl font-bold text-gray-900">{totalImpact.beneficiaries.toLocaleString()}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Projets</p>
                  <p className="text-2xl font-bold text-gray-900">{totalImpact.projects}</p>
                </div>
                <Award className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pays</p>
                  <p className="text-2xl font-bold text-gray-900">{totalImpact.countries}</p>
                </div>
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Budget Total</p>
                  <p className="text-2xl font-bold text-gray-900">{(totalImpact.budget / 1000000).toFixed(1)}M€</p>
                </div>
                <Award className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg border p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher des success stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger className="w-full lg:w-64">
                <SelectValue placeholder="Secteur d'activité" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Badge className={story.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'}>
                    {story.status === 'completed' ? 'Terminé' : 'En cours'}
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {story.sector}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {story.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Impact Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(story.impact).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-orange-600">
                        {typeof value === 'number' ? value.toLocaleString() : value}
                      </div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key === 'beneficiaries' ? 'Bénéficiaires' :
                         key === 'trees' ? 'Arbres' :
                         key === 'leaders' ? 'Leaders' :
                         key === 'participants' ? 'Participants' :
                         key === 'hours' ? 'Heures' :
                         key === 'villages' ? 'Villages' :
                         key === 'midwives' ? 'Sages-femmes' :
                         key === 'centers' ? 'Centres' :
                         key === 'entrepreneurs' ? 'Entrepreneures' :
                         key === 'elected' ? 'Élues' :
                         key === 'projects' ? 'Projets' :
                         key === 'startups' ? 'Startups' :
                         key === 'users' ? 'Utilisateurs' :
                         key === 'languages' ? 'Langues' :
                         key === 'hectares' ? 'Hectares' :
                         key === 'duration' ? 'Durée' :
                         key === 'budget' ? 'Budget' : key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Countries */}
                <div className="flex flex-wrap gap-1">
                  {story.countries.slice(0, 3).map((country) => (
                    <Badge key={country} variant="outline" className="text-xs">
                      {country}
                    </Badge>
                  ))}
                  {story.countries.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{story.countries.length - 3} autres
                    </Badge>
                  )}
                </div>

                {/* Partners */}
                <div>
                  <p className="text-xs text-gray-500 mb-1">Partenaires :</p>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {story.partners.join(', ')}
                  </p>
                </div>

                {/* Engagement */}
                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600">
                      <Heart className="h-4 w-4 mr-1" />
                      {story.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {story.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                      <Share2 className="h-4 w-4 mr-1" />
                      {story.shares}
                    </Button>
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(story.date).toLocaleDateString('fr-FR')}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                    Voir le détail
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Votre OSC a une success story à partager ?</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Inspirez la communauté en partageant vos réussites et bonnes pratiques. 
            Votre expérience peut motiver d'autres OSC à agir.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-orange-50">
            Partager votre success story
          </Button>
        </div>
      </div>
    </Layout>
  );
}
