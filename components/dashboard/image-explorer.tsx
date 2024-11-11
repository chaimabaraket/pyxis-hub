"use client";

import { useState } from "react";
import { ChevronRight, FolderOpen, Tag, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const mockImages = {
  "ubuntu/": {
    tags: ["latest", "20.04", "22.04"],
    details: {
      latest: {
        size: "29.4GB",
        created: "2024-03-20",
        digest: "sha256:abc123...",
        ports: "80/tcp",
        env: ["PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"],
      },
    },
  },
  "postgres/": {
    tags: ["13", "13-alpine", "latest"],
    details: {
      "13": {
        size: "24.1GB",
        created: "2024-03-19",
        digest: "sha256:def456...",
        ports: "5432/tcp",
        env: ["POSTGRES_PASSWORD", "POSTGRES_USER", "POSTGRES_DB"],
      },
    },
  },
};

export function ImageExplorer() {
  const [currentPath, setCurrentPath] = useState("/");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const getCurrentImages = () => {
    if (currentPath === "/") return Object.keys(mockImages);
    return mockImages[currentPath]?.tags || [];
  };

  const handlePathClick = (path: string) => {
    if (path.endsWith("/")) {
      setCurrentPath(path);
      setSelectedImage(path);
    }
  };

  const handleBack = () => {
    setCurrentPath("/");
    setSelectedImage("");
    setSelectedTag("");
  };

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="text-xl">Image Explorer</CardTitle>
        <CardDescription>
          Browse through your Docker images and their tags
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleBack}
              disabled={currentPath === "/"}
            >
              Back
            </Button>
            <span className="text-sm text-muted-foreground">
              Current path: {currentPath}
            </span>
          </div>
          <ScrollArea className="h-[400px] rounded-md border">
            {getCurrentImages().map((item) => (
              <div key={item}>
                <div
                  className="flex items-center justify-between p-4 hover:bg-accent cursor-pointer"
                  onClick={() => handlePathClick(item)}
                >
                  <div className="flex items-center space-x-2">
                    {item.endsWith("/") ? (
                      <>
                        <FolderOpen className="h-4 w-4" />
                        <span>{item}</span>
                      </>
                    ) : (
                      <>
                        <Tag className="h-4 w-4" />
                        <span>{item}</span>
                      </>
                    )}
                  </div>
                  {!item.endsWith("/") && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedTag(item)}
                        >
                          <Info className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            {selectedImage.replace("/", "")}:{item}
                          </DialogTitle>
                          <DialogDescription>Image details</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          {Object.entries(
                            mockImages[selectedImage]?.details[item] || {}
                          ).map(([key, value]) => (
                            <div key={key}>
                              <div className="font-medium capitalize">{key}</div>
                              <div className="text-sm text-muted-foreground">
                                {Array.isArray(value)
                                  ? value.join(", ")
                                  : value.toString()}
                              </div>
                              <Separator className="my-2" />
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                  <ChevronRight className="h-4 w-4" />
                </div>
                <Separator />
              </div>
            ))}
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
}