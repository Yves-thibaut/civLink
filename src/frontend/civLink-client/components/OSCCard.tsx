'use client';

import { useState } from 'react';
import { MapPin, Users, Briefcase, ExternalLink, Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/src/frontend/components/ui/button';
import { Badge } from '@/src/frontend/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/src/frontend/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/src/frontend/components/ui/dialog';
import { OSC } from '@/src/frontend/lib/data';

interface OSCCardProps {
  osc: OSC;
}

export default function OSCCard({ osc }: OSCCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sectorColors: Record<string, string> = {
    'Paix & Gouvernance': 'bg-blue-100 text-blue-800',
    'Environnement': 'bg-green-100 text-green-800',
    'Santé': 'bg-red-100 text-red-800',
    'Éducation': 'bg-purple-100 text-purple-800',
    'Genre & Droits humains': 'bg-pink-100 text-pink-800',
    'Jeunesse & Innovation': 'bg-orange-100 text-orange-800',
    'Culture & Patrimoine': 'bg-yellow-100 text-yellow-800',
    'Agriculture & Sécurité Alimentaire': 'bg-emerald-100 text-emerald-800'
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1" onClick={() => setIsOpen(true)}>
        <div className="relative">
          <img
            src={osc.image}
            alt={osc.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <span className="text-2xl">{osc.countryFlag}</span>
          </div>
        </div>
        <CardHeader className="pb-2">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge className={sectorColors[osc.sector] || 'bg-gray-100 text-gray-800'}>
                {osc.sector}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {osc.members > 500 ? 'Grande OSC' : osc.members > 100 ? 'OSC Moyenne' : 'OSC Locale'}
              </Badge>
            </div>
            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
              {osc.name}
            </h3>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
            {osc.country}
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{osc.description}</p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <Users className="h-4 w-4 mr-1 text-gray-400" />
              {osc.members} membres
            </div>
            <div className="flex items-center text-gray-600">
              <Briefcase className="h-4 w-4 mr-1 text-gray-400" />
              {osc.projects} projets
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-start space-x-3">
              <img
                src={osc.logo}
                alt={osc.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900">{osc.name}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-lg">{osc.countryFlag}</span>
                  <span className="text-gray-600">{osc.country}</span>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div>
              <Badge className={sectorColors[osc.sector] || 'bg-gray-100 text-gray-800'}>
                {osc.sector}
              </Badge>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">À propos</h3>
              <p className="text-gray-600">{osc.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{osc.members}</div>
                <div className="text-sm text-gray-600">Membres</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{osc.projects}</div>
                <div className="text-sm text-gray-600">Projets</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{osc.founded}</div>
                <div className="text-sm text-gray-600">Fondée</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{osc.tags.length}</div>
                <div className="text-sm text-gray-600">Domaines</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Projets récents</h3>
              <div className="space-y-3">
                {osc.recentProjects.map((project, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{project.name}</h4>
                      <Badge variant={project.status === 'active' ? 'default' : project.status === 'completed' ? 'secondary' : 'outline'}>
                        {project.status === 'active' ? 'Actif' : project.status === 'completed' ? 'Terminé' : 'Planifié'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                    <div className="text-sm font-medium text-green-600">{project.budget}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Domaines d'expertise</h3>
              <div className="flex flex-wrap gap-2">
                {osc.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>{osc.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{osc.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{osc.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <ExternalLink className="h-4 w-4" />
                  <a href={`https://${osc.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {osc.website}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 pt-4 border-t">
              <Button className="flex-1">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contacter
              </Button>
              <Button variant="outline" className="flex-1">
                Suivre
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}